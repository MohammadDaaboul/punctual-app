import styled from "styled-components";

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;

export default function Task(props) {
  const provided = props.provided;
  return (
    <Item
      ref={props.provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {props.title}
    </Item>
  );
}
