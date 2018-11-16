import React, { Component } from 'react';
import axios from 'axios';

function formatPostData(data){
    const formattedData = new URLSearchParams();

    for( let [k,v] of Object.entries(data)){
        formattedData.append(k, v);
    }

    return formattedData;
}

class Test extends Component {
    async componentDidMount(){
        // GET DATA EXAMPLE
        // const resp = await axios.get('/api/test/get.php');

        // console.log('Test Resp:', resp);

        // POST Data Example

        const postData = {
            name: 'Heather',
            food: 'Pizza'
        }

        const cleanData = formatPostData(postData);

        const resp = await axios.post('/api/test/post.php', cleanData);

        console.log('Post Resp:', resp);
    }

    render(){
        return (
            <h1>Test Component</h1>
        );
    }
}

export default Test;
