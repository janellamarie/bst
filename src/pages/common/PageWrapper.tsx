interface PageWrapperProps {
  id: string;
  heading: string;
  children: React.ReactNode;
}

const PageWrapper = ({ id, heading, children }: PageWrapperProps) => {
  return (
    <div className="page-container" id={id}>
      <div className="page-heading">
        <span className="page-heading-text heading">{heading}</span>
      </div>

      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;
