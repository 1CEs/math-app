import React, { useState } from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors } from '@/constant/color';
import Card from './card/Card';
import CardHeader from './card/CardHeader';
import CardBody from './card/CardBody';

type Props = {
    children: React.ReactNode;
    content: string;
};

const Tooltip = ({ children, content }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={isVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
                        <View style={styles.modalOverlay}>
                            <Card style={styles.tooltipContainer}>
                                <CardHeader title="Information" />
                                <CardBody className='rounded-b-lg'>
                                    <Text className='text-sm text-white'>{content}</Text>
                                </CardBody>
                            </Card>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tooltipContainer: {
        backgroundColor: colors['background-dark'],
        borderRadius: 8,
        maxWidth: '80%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default Tooltip; 