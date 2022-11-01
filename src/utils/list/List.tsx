import ListItem from "./ListItem";

interface Event {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    type: string;
    location: string;
  }  
  
interface ListProps {
    sampleData: Array<Event>;
    type: string;
    location: string;
  }

function List(props: ListProps) {
  const listComponents = props.sampleData
    .filter((event) => event.type.includes(props.type))
    .filter((event) => event.location.includes(props.location))
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
