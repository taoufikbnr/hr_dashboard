import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableFile = ({ file }) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.FILE, file },
  });

  return (
    <div ref={drag} style={{ cursor: 'move' }}>
      {file.name}
    </div>
  );
};

export default DraggableFile;