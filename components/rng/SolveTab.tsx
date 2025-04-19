import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated';

type Difficulty = 'easy' | 'medium' | 'hard' | 'insane';

const SolveTab = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [timeoutHappened, setTimeoutHappened] = useState(false);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operator, setOperator] = useState('+');
    const [options, setOptions] = useState<number[]>([]);
    const [result, setResult] = useState('');
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(10);
    const [streak, setStreak] = useState(0);

    const info = "Every time you solve a question, you have a chance to get an item from the reward pool, but yes, you have a chance to get nothing too. But every 10 streaks, you will get a reward for sure."

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Animations
    const scaleAnim = useSharedValue(1);
    const shakeAnim = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scaleAnim.value },
            { translateX: shakeAnim.value },
        ],
    }));

    const updateDifficulty = (streak: number) => {
        if (streak >= 13) {
            setDifficulty('insane');
            setTimeLeft(5);
        } else if (streak >= 8) {
            setDifficulty('hard');
            setTimeLeft(6);
        } else if (streak >= 4) {
            setDifficulty('medium');
            setTimeLeft(8);
        } else {
            setDifficulty('easy');
            setTimeLeft(10);
        }
    };

    const generateQuestion = () => {
        updateDifficulty(streak);

        let maxNum = 10;
        let minNum = 1;

        if (difficulty === 'medium') {
            maxNum = 20;
        } else if (difficulty === 'hard') {
            maxNum = 50;
        } else if (difficulty === 'insane') {
            maxNum = 100;
        }

        const newA = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        const newX = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        const operators = ['+', '-', '*'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        const finalResult = calculateFinalResult(newA, newX, randomOperator);

        setA(newA);
        setB(finalResult);
        setOperator(randomOperator);

        const answers = generateOptions(newX);
        setOptions(answers);
        setResult('');
        setSelectedOption(null);
    };

    const calculateFinalResult = (n1: number, x: number, op: string) => {
        if (op === '+') return n1 + x;
        if (op === '-') return n1 - x;
        if (op === '*') return n1 * x;
        return 0;
    };

    const calculateX = (result: number, n1: number, op: string) => {
        if (op === '+') return result - n1;
        if (op === '-') return n1 - result;
        if (op === '*') return result / n1;
        return 0;
    };

    const generateOptions = (correct: number) => {
        const opts = new Set<number>();
        opts.add(correct);

        while (opts.size < 4) {
            const variance = 5 + (difficulty === 'insane' ? 50 : difficulty === 'hard' ? 30 : difficulty === 'medium' ? 20 : 10);
            const wrong = correct + Math.floor(Math.random() * (variance * 2)) - variance;
            if (wrong !== correct && wrong >= 0) {
                opts.add(wrong);
            }
        }

        const shuffled = Array.from(opts).sort(() => Math.random() - 0.5);
        return shuffled;
    };

    const handleAnswer = (selected: number) => {
        setSelectedOption(selected);
        const correctX = calculateX(b, a, operator);

        if (selected === correctX) {
            setResult('Correct 🎯');
            setStreak(prev => prev + 1);
            scaleAnim.value = withSequence(
                withTiming(1.2, { duration: 150 }),
                withTiming(1, { duration: 150 })
            );
        } else {
            setResult('Wrong ❌');
            setStreak(0); // ❌ Reset streak if wrong
            shakeAnim.value = withSequence(
                withTiming(-10, { duration: 50 }),
                withTiming(10, { duration: 50 }),
                withTiming(-10, { duration: 50 }),
                withTiming(10, { duration: 50 }),
                withTiming(0, { duration: 50 })
            );
        }

        setTimeout(() => {
            generateQuestion();
        }, 1000);
    };

    const startGame = () => {
        setTimeoutHappened(false);
        setGameStarted(true);
        setStreak(0);
        generateQuestion();
    };

    useEffect(() => {
        if (gameStarted) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current!);
                        setGameStarted(false);
                        setTimeoutHappened(true);
                        setStreak(0);
                        setTimeout(() => {
                            setTimeoutHappened(false);
                        }, 2000);
                        return 10;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [gameStarted]);

    return (
        <View className="flex-1 justify-center items-center overflow-hidden gap-y-5">
            <View className='flex-row justify-center gap-x-3 items-center'>
                <View className='flex-1 flex-row border-2 overflow-hidden border-background-dark rounded-lg'>
                    <Text className="flex-1 text-white rounded-l-lg text-xs p-1 bg-background-bright">Streak</Text>
                    <Text className="flex-1 text-white text-center w-full text-xs p-1 bg-background-dark">{streak}</Text>
                </View>
                <View className='flex-1 flex-row border-2 border-background-dark overflow-hidden rounded-lg'>
                    <Text className="flex-1 text-white rounded-l-lg text-xs p-1 bg-background-bright">Mode</Text>
                    <Text className="flex-1 text-white text-center w-full text-xs p-1 bg-background-dark">{difficulty.toUpperCase()}</Text>
                </View>
                <View className='flex-1 flex-row border-2 border-background-dark overflow-hidden rounded-lg'>
                    <Text className="flex-1 text-white rounded-l-lg text-xs p-1 bg-background-bright">CD</Text>
                    <Text className="flex-1 text-white text-center text-xs p-1 bg-background-dark w-full">{timeLeft}s</Text>
                </View>
            </View>
            {!gameStarted && !timeoutHappened && (
                <View className='flex-1 flex-col gap-y-3 justify-center items-center'>
                    <Text className='text-gray text-center p-2 bg-background-dark border-primary border-l-2 text-sm font-bold'>
                        {info}
                    </Text>
                    <TouchableOpacity
                        onPress={startGame}
                        className="bg-primary py-2 px-8 rounded-xl"
                    >
                        <Text className="text-white font-bold text-2xl">Start</Text>
                    </TouchableOpacity>
                </View>
            )}

            {timeoutHappened && (
                <Text className="text-white text-3xl font-bold">⏳ Timeout!</Text>
            )}

            {gameStarted && (
                <>
                    {/* Question Block */}
                    <View className="flex-row gap-x-3 items-center justify-center">
                        <View className="bg-primary p-4 rounded-lg">
                            <Text className="text-white text-3xl font-bold">{a}</Text>
                        </View>
                        <View className="bg-background-dark p-4 rounded-lg">
                            <Text className="text-white text-3xl font-bold">{operator}</Text>
                        </View>
                        <View className="bg-primary p-4 rounded-lg">
                            <Text className="text-white text-3xl font-bold">X</Text>
                        </View>
                        <Text className="text-white text-3xl font-bold">=</Text>
                        <View className="bg-primary p-4 rounded-lg">
                            <Text className="text-white text-3xl font-bold">{b}</Text>
                        </View>
                    </View>

                    {/* Result */}
                    {result !== '' && (
                        <Text className="text-white text-center p-3 bg-background-dark rounded-lg text-2xl font-semibold">
                            {result}
                        </Text>
                    )}

                    {/* Options */}
                    <View className="flex-row flex-wrap justify-center">
                        {options.map((opt, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleAnswer(opt)}
                                activeOpacity={0.8}
                            >
                                <Animated.View
                                    style={selectedOption === opt ? animatedStyle : {}}
                                    className="bg-background-dark w-24 h-24 justify-center items-center rounded-lg m-2"
                                >
                                    <Text className="text-white text-2xl font-semibold">{opt}</Text>
                                </Animated.View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            )}
        </View>
    );
};

export default SolveTab;
