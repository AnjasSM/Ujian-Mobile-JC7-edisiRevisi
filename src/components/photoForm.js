import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { photoUpdate } from '../actions';
import { CardSection,Input } from './common';

class PhotoForm extends Component {

    onPhotoChange = (text) => {
        this.props.photoUpdate('photo', text);
    }

    onCaptionChange = (text) => {
        this.props.photoUpdate('caption', text);
    }
    
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                         label="caption" 
                         placeholder="Write Caption"
                         value={this.props.caption}
                         onChangeText={this.onCaptionChange} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Link photo" 
                        placeholder="image Url"
                        value={this.props.photo}
                        onChangeText={this.onPhotoChange}
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { photo,caption } = state.photoForm;

    return {photo,caption };
};

export default connect(mapStateToProps, { photoUpdate })(PhotoForm);
