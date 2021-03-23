import React from 'react';

const Neck = (props) => <div>{props.children}</div>
const Body = (props) => <div>{props.children}</div>
const Legs = (props) => <div>{props.children}</div>

// do && conditions

const BadComponent = (props) => {

  if (props.showNeck) {
    return (
      <>
        <Neck>{props.neck}</Neck>
        <Body>{props.body}</Body>
        <Legs>{props.body}</Legs>
      </>
    );
  }

  return (
    <>
      <Body>{props.body}</Body>
      <Legs>{props.body}</Legs>
    </>
  );
}

const BetterComponent = (props) => (
  <>
    {props.showNect && <Neck>{props.neck}</Neck>}
    <Body>{props.body}</Body>
    <Legs>{props.body}</Legs>
  </>
)

// don't change tag types

const WorstComponent = (props) => (
  <>
    {props.showBrest ? (
      <div styles={{}}>
        <Brest />
        <Ribs />
        <Stomack />
      </div>
    ) : (
      <ul>
        <Ribs />
        <Stomack />
      </ul>
    )}
  </>
)
