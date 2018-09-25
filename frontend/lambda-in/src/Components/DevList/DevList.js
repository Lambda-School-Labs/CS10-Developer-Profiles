import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Navbar/navbar' 
import DevProfileCard from './DevProfileCard'
import '../DevList/DevList.css'

export default class DevList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: 'abc@xyz.com',
          firstName: 'daat',
          lastName: 'man',
          desiredTitle: 'BOSS',
          currentLocation: 'mars',
          github: 'github.com/kkkk',
          linkedin: 'linkedin.com/batman',
          portfolio: 'batman.com',
          acclaimBadge: 'lambda Batch',
          placesInterested: ' earh etc',
          password: '12345678Aa$',
          confirmPassword: '',
          isSignedIn: false,
          summary: 'wubba lubba dub dub',
          topskill: 'Baller',
          projects: 'Dev profiles',
          experience: 'mars inc.',
          education: 'Lambda School',
        };
    }
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleAuth = () => {
        if(localStorage.getItem('token') !== null){
            this.setState({
                isSignedIn: true
            })
        }
        else{
            this.setState({
                isSignedIn: false
            })
        }
    }

    handleGetAll = () => {
        if(this.state.isSignedIn){
            axios
                .get(
                `/api/seekers/`,
            
                {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                }
                )
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.log(error);
                });

        }
    } 


    componentDidMount(){
        this.handleAuth();
        this.handleGetAll();
    }

    render() {
        return (
            <div className="App">
                <div className="mainBar" >
                    <div className="sideBar">
                        <Typography variant="headline" component="h3">
                            Filters
                        </Typography>
                        <FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.gilad} defaultChecked color="default" onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="Full Stack Web"
                                />

                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.gilad} defaultChecked color="default"  onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="iOS"
                                />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.gilad} defaultChecked color="default"  onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="Android"
                                />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.gilad} defaultChecked color="default"  onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="UI/UX"
                                />
                        </FormControl>
                        <Divider />
                        <FormControl>
                            <FormControlLabel
                                    control={
                                        <Checkbox checked={this.state.gilad} defaultChecked color="default" onChange={this.handleChange('gilad')} value="gilad" />
                                    }
                                    label="Lambda Badge"
                                    />
                        </FormControl>
                        <Divider />
                        <br/>
                        <FormControl>
                        <Typography variant="headline" component="h3" >
                            Located
                        </Typography>
                            <FormControlLabel
                                    control={
                                        <Checkbox checked={this.state.gilad} defaultChecked color="default" onChange={this.handleChange('gilad')} value="gilad" />
                                    }
                                    label="with in 100 mile"
                                    />
                        </FormControl>

                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">search cities</InputLabel>
                            
                            <Input
                            id="input-with-icon-adornment"
                            type="search"
                            />
                        </FormControl>
                        <br/>
                        <Typography variant="headline" component="h3" >
                            Will Relocate
                        </Typography>
                        
                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">search cities</InputLabel>
                            
                            <Input
                            id="input-with-icon-adornment"
                            type="search"
                            />
                        </FormControl>
                    </div>
                    <div className="cardBar">
                        <DevProfileCard />  
                        <DevProfileCard />  
                        <DevProfileCard />  
                        <DevProfileCard />  
                    </div>
                </div>
                
            </div>
        )
    }
}
