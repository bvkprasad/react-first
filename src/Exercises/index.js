import React from 'react';
import {Grid, Paper, Typography, List} from '@material-ui/core';
import {ListItem, ListItemText} from '@material-ui/core'
const styles = {
    paper: {padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: "auto"}
}

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
      id,
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left.'
    }
})  => 
<Grid container spacing={3}>
    <Grid item xs>
        <Paper style={styles.paper}>
            {
                exercises.map(([group,exercises]) => 
                    !category || category === group ?
                    <Typography 
                        variant="subtitle1"
                        style={{textTransform: "capitalize"}}    
                        key={group}>
                        {group}
                        <List>
                            {exercises.map(({id, title}) => 
                                <ListItem button  key={title}  
                                onClick={() => onSelect(id)}>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            )}
                        </List>
                    </Typography>
                    :
                    null                    
                )
            }
        </Paper>
    </Grid>
    <Grid item xs>
        <Paper style={styles.paper}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="subtitle1" style={{marginTop: 30}}>
                {description}
            </Typography>
        </Paper>
    </Grid>
</Grid> 