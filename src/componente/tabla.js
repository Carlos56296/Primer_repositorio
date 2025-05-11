const teachers = [
    { id: 1, name: "Juan Pérez", subject: "Matemáticas", experience: 10 },
    { id: 2, name: "María López", subject: "Historia", experience: 8 },
    { id: 3, name: "Carlos Rodríguez", subject: "Física", experience: 12 },
  ];
  
  const TeachersTable = () => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Materia</th>
            <th>Experiencia (años)</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TeachersTable;