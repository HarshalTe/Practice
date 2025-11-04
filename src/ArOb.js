const ArOb = () => {
  const ar1 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    { one: 1, two: 2, three: 3 } // ✅ fixed: unique keys
  ];

  return (
    <>
      {ar1.map((ech, i) => {
        // ✅ Check if ech is an array
        if (Array.isArray(ech)) {
          return (
            <div key={i}>
              {ech.map((num, j) => (
                <h1 key={j}>{num}</h1>
              ))}
            </div>
          );
        }
     
        else if (typeof ech === "object") {
          return (
            <div key={i}>
              {Object.entries(ech).map(([key, val], j) => (
                <h1 key={j}>
                  {key}: {val}
                </h1>
              ))}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

export default ArOb;







// const ArOb = () => {
//   const ar1 = [{ f1: "a", f2: "b", f3: "c", f4: "d", f5: "e" }];
//   const ar2 = [1, 2, 3, 4, 5];

//   return (
//     <>
//       {ar1.map((obj, i) => (
//         <div key={i}>
//           {Object.values(obj).map((val, j) => (
//             <h1 key={j}>
//               {val} - {ar2[j]}
//             </h1>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// };

// export default ArOb;
// ;