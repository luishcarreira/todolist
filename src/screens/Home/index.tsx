import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, View, TextInput, TouchableOpacity, Image, Alert, FlatList, ScrollView } from 'react-native';
import randomInteger from 'random-int';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Task, TaskProps } from '../../components/Task';

import { styles } from './styles';
import { Counter } from '../../components/Counter';
import { Background } from '../../components/Background';

export function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [taskDescription, setTaskDescription] = useState('')
    const [tasksConclued, setTasksConclued] = useState<number>(0)

    useEffect(() => {
        const conclued = tasks.filter(task => task.isChecked).length
        setTasksConclued(conclued)
    }, [tasks])

    function handleTaskAdd() {
        //validacao

        setTasks((prevState) => {
            return [
                {
                    id: randomInteger(9999),
                    isChecked: false,
                    description: taskDescription,
                    onChecked: () => { },
                    onRemove: () => { },
                },
                ...prevState,
            ]
        })
    }

    function handleTaskRemove(id: number, description: string) {
        Alert.alert("Remover", `Remover a tarefa ${description}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    function handleCheckedTask(id: number) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, isChecked: !task.isChecked }
            }

            return task
        })


        setTasks(updateTask)
    }

    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.logo}
                    source={require('../../../assets/Logo.png')}
                />

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6b6b6b"
                        onChangeText={setTaskDescription}
                        value={taskDescription}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTaskAdd}
                    >
                        <Image
                            source={require('../../../assets/addIcon.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.count}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.labelCreated}>Criadas</Text>
                        <Counter count={tasks.length} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.labelConclued}>Concluídas</Text>
                        <Counter count={tasksConclued} />
                    </View>
                </View>


                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id}
                            onChecked={() => handleCheckedTask(item.id)}
                            isChecked={item.isChecked}
                            description={item.description}
                            onRemove={() => handleTaskRemove(item.id, item.description)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyList}>
                            <MaterialCommunityIcons name="clipboard-check-outline" size={56} color="grey" />
                            <Text style={{ color: '#808080', fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={{ color: '#808080' }}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                    style={{ width: '100%' }}
                />
            </View>
        </Background>
    );
}