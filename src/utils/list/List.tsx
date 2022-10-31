import ListItem from "./ListItem";

function List(props) {
  const listComponents = props.sampleData
    .filter((event) => event.type.includes(props.filter))
    .filter((event) => event.location.includes(props.city))
    .map((object) => {
      return (
        <ListItem
          title={object.title}
          subtitle={object.subtitle}
          description={object.description}
          link={object.link}
        />
      );
    });
  return <ul>{listComponents}</ul>;
}

export default List;
