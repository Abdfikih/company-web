import AppHead from "../components/AppHead";

function CVPage() {
  return (
    <div>
      <AppHead title="paraSolutions's CV" />
      <iframe
        src="/paraSolutions's-cv.pdf"
        width="100%"
        height="1200px"
      ></iframe>
    </div>
  );
}

export default CVPage;
