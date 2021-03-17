import React from "react";
import { Paper, Box, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

import FlagUA from "./FlagUA";

const countries = Array(5).fill({
  phoneCode: '+380',
  name: 'Ukraine',
  code: 'UA',
  flag: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Ukraine.png" />,
})

const BadComposing = () => {

  return (
    <Paper elevation={2}>
      <Box p={1}>
        <List>
          {countries.map(country => (
            <ListItem>
              <ListItemIcon>
                {country.flag}
              </ListItemIcon>
              <ListItemText>{`${country.name} ${country.phoneCode}`}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default BadComposing;
