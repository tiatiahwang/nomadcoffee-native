import { Ionicons } from '@expo/vector-icons';

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  focusedName: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  color: string;
  size: number;
}

const TabIcons = (props: Props) => {
  const { name, focusedName, focused, color, size } = props;
  return (
    <Ionicons name={focused ? name : focusedName} size={size} color={color} />
  );
};

export default TabIcons;
