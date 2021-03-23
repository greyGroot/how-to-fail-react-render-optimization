import React from "react";
import { Paper, Box} from "@material-ui/core";

// Bad Composing

const BadComponent = (props) => {

  const ListItem = (item) => (
    <li key={item.uniqueID}>{item.text}</li>
  );

  return (
    <div>
      {props.name}
      <ul>
        {props.items.map(item =>
          <ListItem item={item} />
        )}
      </ul>
    </div>
  );
};

// Ok Composing

const OkComponent = (props) => {

  const ListItem = React.useCallback(
    (item) => (
      <li key={item.uniqueID}>{item.text}</li>
    ), []
  );

  return (
    <div>
      {props.name}
      <ul>
        {props.items.map(item =>
          <ListItem item={item} />
        )}
      </ul>
    </div>
  );
};

// Better Composing

const ListItem = (item) => (
  <li key={item.uniqueID}>{item.text}</li>
);

const BetterComponent = (props) => {
  return (
    <div>
      {props.name}
      <ul>
        {props.items.map(item =>
          <ListItem item={item} />
        )}
      </ul>
    </div>
  );
};

// Best Composing

const List = ({ items }) => (
  <ul>
    {items.map(item =>
      <li key={item.uniqueID}>{item.text}</li>
    )}
  </ul>
);

const BestComponent = (props) => {
  return (
    <div>
      {props.name}
      <List items={props.items} />
    </div>
  );
};

const BadComposing = () => {

  return (
    <Paper elevation={2}>
      <Box p={1}>
        Bad Composing
      </Box>
    </Paper>
  );
}

export default BadComposing;
