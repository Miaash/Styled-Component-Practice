import React from 'react';
import styled from 'styled-components';
// import './CourseGoalItem.css';


const GoalItems = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width : 900px;
  }

`
const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalItems onClick={deleteHandler}>
      {props.children}
    </GoalItems>
  );
};

export default CourseGoalItem;
