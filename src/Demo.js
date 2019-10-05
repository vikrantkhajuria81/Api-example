import React from 'react';
import axios from'axios'; 
class Demo extends React.Component{
   
    
constructor(){
    super();
    this.state={
        text1:"shubham ",
        text2:" ",
        data:{},
        load: false,
        array:[{name:"vikrant"},{name:"khajuria"}]
    }
}    
handlechange(e){
    console.log(e.target.value);
    this.setState({text1:e.target.value});
}
change()
{
    this.setState({array:this.state.array.concat({name:this.state.text1})});
    this.setState({text1:" "});
}
componentDidMount(){
  return(
 
      axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        params: {
          ID: 12345
        }
      })
      .then( (response)=> {
        console.log(response.data);
        return this.setState({data:response.data , load: true})
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }) 
    )
  
}


    
    render() {
      const {data} = this.state
        return(
            <div>
              {this.state.load ?<div> {data.id} {data.title}</div> : <div> loading...</div>}
              
// {this.state.text1}
                <input type="text" name="text1" value={
                this.state.text1
            }
            onChange={(e)=>this.handlechange(e)}
            />
            <button onClick={()=>this.change()}>submit</button>
            <div>
            {this.state.array.map((val,i)=>{return<div>{val.name}</div>})}</div></div>);}}
            export default Demo
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

