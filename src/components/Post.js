import React, {Component} from 'react';
import  {Text, View} from 'react-native';
import {Container, Header, Left, Title, Body, Right} from 'native-base';
import { connect } from 'react-redux';
import {photoCreate} from '../actions';
import PhotoForm from './photoForm';
import {Card, CardSection, Button} from './common';

class Post extends Component{

    onButtonPress = () => {
        const { photo, caption } = this.props;
        if(this.props.user){
            if(this.props.user.user){
                this.props.photoCreate(photo, caption,this.props.user.user.email);
            }else{
                this.props.photoCreate(photo, caption,this.props.user.email);
            }
        }
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>Instagram</Title> 
                    </Body>
                    <Right></Right>
                </Header>
            <View>
            <Card>
                    <PhotoForm />
                    
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Upload
                        </Button>
                    </CardSection>
                </Card>
            </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { photo, caption } = state.photoForm;
    const {user} =state.auth;
    return { photo, caption,user };
};

export default connect(mapStateToProps, { photoCreate })(Post);