import React,{Component} from 'react';
import YoutubeComponent from '../../components/yutubeComponent/YoutubeComponent';
import Form from '../../components/form/Form';

class Home extends Component{
    render(){
        return(
            <div>
                <h4>Youtube Component</h4>
                <hr/>
                <YoutubeComponent time="10.00" title="Kiminonawa Batch 1" desc="Akan Rilis pada musim semi" img="https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"/>
                <YoutubeComponent time="11.00" title="Kiminonawa" desc="Episode 1"/>
                <YoutubeComponent time="18.00" title="Kiminonawa" desc="Episode 18"/>
                <YoutubeComponent time="12.20" title="Kiminonawa" desc="Episode 90"/>
                <YoutubeComponent/>
            </div>
        )
    }
}

export default Home;
