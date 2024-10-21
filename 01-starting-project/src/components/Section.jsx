export default function Section({ title, children, ...props }) {
  return (
    //...props 지정하지않은 모든 props를 가져오고 적용할때 ...props 사용해야함
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
