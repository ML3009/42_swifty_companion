import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { UserType } from "../types/users"

function UserInfos({ userData }: { userData: UserType }) {
    const [selectedCursus, setSelectedCursus] = useState<number>(userData.cursus_users[0]?.cursus_id || 0);
    
    const [selectedCursusData, setSelectedCursusData] = useState(userData.cursus_users[0] ? userData.cursus_users[0] : undefined);

    const [selectedCursusProjects, setSelectedCursusProjects] = useState<any[]>();

    const [showSkills, setShowSkills] = useState(false);


    const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const cursusData = userData.cursus_users.find(cursusUser => {
            return cursusUser.cursus_id === selectedCursus;
        });
        setSelectedCursusData(cursusData);
        const projects = userData.projects_users.filter(projectUser => 
            projectUser.cursus_ids.includes(selectedCursus)
        );
        setSelectedCursusProjects(projects);
    }, [selectedCursus]);
    
    const cursusOptions = userData.cursus_users.map(cursusUser => ({
        label: cursusUser.cursus.name,
        value: cursusUser.cursus_id
    }));

    const toggleProjectDetails = (projectId: number) => {
        setExpandedProjects(prevState => ({
            ...prevState,
            [projectId]: !prevState[projectId]
        }));
    };

    const getStatusColor = (validated: boolean | null | undefined) => {
        switch (validated) {
            case true:
                return 'lightgreen';
            case false:
                return 'lightcoral';
            default:
                return 'lightblue';
        }
    };


    const IntegerformatLevel = (level: number) => {
        const integerPart = Math.floor(level);
        return `Niveau ${integerPart}`;
    };

    const DecimalformatLevel = (level: number) => { 
        const integerPart = Math.floor(level);
        const decimalPart = ((level - integerPart) * 100).toFixed();

        return decimalPart.toString();
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
             <View style={styles.header_container}>
                <Image
                    source={{ uri: userData.image.link }}
                    style={styles.image}
                />
            </View>
            <View style={styles.top_container_text}>
                <Text style={styles.text}> {userData.displayname ? userData.displayname : 'Non defini'} </Text>
                <Text style={styles.text}> {userData.login ? userData.login : 'Non defini'} </Text>
            </View>
            <View style={styles.top_container_text}>
                <Text style={styles.text}>🏢  Campus 42 {userData.campus[0]?.name ? userData.campus[0].name : "Non defini" }</Text>
                <Text style={styles.text}>📩  {userData.email ? userData.email : 'Non defini'} </Text>
                <Text style={styles.text}>📱  {(userData.phone && userData.phone !== 'hidden') ? `【${userData.phone}】` : '【Private phone number】'}</Text>
            </View>
            <View style={styles.top_container_text}>
                <Text style={styles.text}> Correction points : {userData.correction_point ? userData.correction_point : '0'} </Text>
                <Text style={styles.text}> Wallet : {userData.wallet ? userData.wallet : '0'} </Text>
            </View>
            <View>
            <Text style={styles.title}> Cursus: </Text>
                    <Picker
                    selectedValue={selectedCursus}
                    onValueChange={(itemValue: number, itemIndex: number) => setSelectedCursus(Number(itemValue))}
                >
                    {cursusOptions.map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Cursus Information</Text>
                <Text style={styles.text}>{IntegerformatLevel(selectedCursusData?.level ? selectedCursusData.level : 0)}</Text>
                <View style={styles.experienceBarContainer}>
                        <Text style={styles.experienceBarText}>{DecimalformatLevel(selectedCursusData?.level ? selectedCursusData.level : 0)}%</Text>
                        <View style={[styles.experienceBar, { width: `${((selectedCursusData?.level ?? 0) % 1) * 100}%` }]} />
                </View>
                <TouchableOpacity onPress={() => setShowSkills(!showSkills)}>
                        <Text style={{textAlign: 'center', padding: 5, fontWeight: 'bold'}}> {showSkills ? '⬆ Skills ⬆' : `⬇ Skills ⬇`} </Text>
                        <Text style={styles.text}>{showSkills ? selectedCursusData?.skills?.map(skill => `〉  ${skill.name}\n`) : null} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
            {selectedCursusProjects && selectedCursusProjects.length > 0 && (
                    <>
                        <Text style={styles.title}>Projects</Text>
                        {selectedCursusProjects.map((project: any) => (
                            <TouchableOpacity key={project.id} onPress={() => toggleProjectDetails(project.id)}>
                                <View style={[styles.projectContainer, { backgroundColor: getStatusColor(project["validated?"]) }]}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={[styles.text, {fontWeight: 'bold'}]}>{project.project.name}</Text>
                                        <Text style={[styles.text, {fontWeight: 'bold'}]}>{project.final_mark}</Text>
                                    </View>
                                    {expandedProjects[project.id] && (
                                        <>
                                            <Text onPress={() => Linking.openURL(`https://projects.intra.42.fr/projects/${String(project.project.slug).toLowerCase()}`)} style={[styles.text, {color: 'blue'}]}>Lien de la page du projet</Text>
                                        </>
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </>
                )}
    
            </View>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'bisque',
    },
    header_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'bisque',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    top_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    top_container_text: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        width: '100%',
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#E6E6FA',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginVertical: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    experienceBarContainer: {
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0df',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10,
    },
    experienceBar: {
        height: '100%',
        backgroundColor: '#76c7c0',
        borderRadius: 5,
    },
    experienceBarText: {
        color: '#000',
        fontWeight: 'bold',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        zIndex: 1,
    },
    projectContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 5,
    },
});

export default UserInfos;