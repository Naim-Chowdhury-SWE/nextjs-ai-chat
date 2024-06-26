const Footer = () => {
  return (
    <footer className="text-center bg-zinc-500 border-t -mt-32">
      <h3 className="text-2xl font-bold pt-4">Note!</h3>
      <p className="font-semibold pb-4">
        If no answer is being presented it means that my credits at OpenAI has
        run out
      </p>

      <p>&copy; {new Date().getFullYear()} Naim Chowdhury</p>
    </footer>
  );
};
export default Footer;
