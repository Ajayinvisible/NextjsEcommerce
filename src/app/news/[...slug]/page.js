async function CatchAllNews({ params }) {
    const slug = (await params).slug;
  return (
    <>
      <div>CatchAllNews</div>
      {slug.map((item, index) => {
        return (
          <div key={index}>
            <p>Slug : {item}</p>
          </div>
        );
      })}
    </>
  );
}

export default CatchAllNews;
