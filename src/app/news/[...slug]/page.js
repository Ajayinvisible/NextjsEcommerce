async function CatchAllNews({ params,searchParams }) {
  const slug = (await params).slug;
  const search = await searchParams;
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
      <p>Search : { search }</p>
    </>
  );
}

export default CatchAllNews;
