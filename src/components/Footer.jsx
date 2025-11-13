// MARK: Footer-komponent
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} StorAid, All rights reserved.</p>
    </footer>
  );
}
