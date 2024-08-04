import PrimaryBg from './bg-decorator';

interface MyComponentProps {
  content: string;
}

function MyComponent({ content }: MyComponentProps) {
  return <div className='p-3'>{content}</div>;
}

export default PrimaryBg(MyComponent);