import React, { Component } from 'react';
import  { Text, View,ScrollView } from 'react-native';
import { Container, Header, Left, Title, Right } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import PhotoDetail from './getPhotoList';
import { logoutUser,getPhotoList } from '../actions';
import { Card, CardSection } from './common';
import { Icon } from 'react-native-elements';

class Profile extends Component{

    state ={email:''}

    componentDidMount(){
        
        console.log(this.props.user)
        if(this.props.user){
            if(this.props.user.user){
                this.props.getPhotoList();
                this.setState({email:this.props.user.user.email})
            }else{
                this.props.getPhotoList();
                this.setState({email:this.props.user.email})
            }
            
        }
    }

    renderPhoto = () => {
        var filterPhoto = this.props.photoList.filter((item)=>{
            return item["email"] == this.state.email
        })
        var listPhoto = filterPhoto.map((item) => {
            return (
                <PhotoDetail key={item.photo} album={item}/> 
            )
        });
        return listPhoto;
    }

    logOut=()=>{
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Title>Instagram</Title>
                    </Left>
                    <Right>
                        <Icon name='exit-to-app' color='white' size={25} onPress={this.logOut}/>
                    </Right>
                </Header>
            <View style={{justifyContent: 'center', flex:1}}>
                <Card>
                    <CardSection>
                        <Text>Email: {this.state.email}</Text>
                    </CardSection>
                </Card>
                <ScrollView >
                        {this.renderPhoto()}
                </ScrollView>
            </View>
            </Container>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.photoList);
    const photoList = _.map(state.photoList, (val, uid) => {
        return { ...val, uid };
    });

    console.log(photoList);
    const {user} =state.auth;
    return {user,photoList};
}

export default connect (mapStateToProps,{logoutUser,getPhotoList})(Profile);