// Decorator to add 'bg-primary' class
function PrimaryBg<P>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  return (props: P) => (
    <div className="bg-primary border-round-md">
      <WrappedComponent {...props} />
    </div>
  );
}

export default PrimaryBg;