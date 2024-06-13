// 라벨을 이용한 방법
// export default function TabButton({ label }) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

// 내용을 채워서 하는 방법
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* 클릭시 props 가져옴 */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

// 초기버전
// export default function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       {/* 클릭시 props 가져옴 */}
//       <button className={isSelected ? "active" : ""} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }
