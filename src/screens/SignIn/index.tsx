import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import Folder from '../../assets/folder.png'
import { ButtonIcon } from '../../components/ButtonIcon'


export function SignIn() {

    return (
        <View style={styles.container}>
            <Image source={Folder} style={styles.image} resizeMode="stretch" />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Coletor de cantos {`\n`}
                    em campeonatos
                </Text>

                <Text style={styles.subtitle}>
                    Crie, compartilhe com seus amigos
                </Text>

                <ButtonIcon title="Clique para Entrar" />
            </View>
        </View>
    );
}