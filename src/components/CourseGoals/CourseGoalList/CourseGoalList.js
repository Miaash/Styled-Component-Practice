import React from 'react';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styled from 'styled-components';

const GoalList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    width : 900px;
  }
`


const CourseGoalList = props => {
  return (
    <GoalList>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalList>
  );
};

export default CourseGoalList;
