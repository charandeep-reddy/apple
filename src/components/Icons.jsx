function Icons({ path, image,alt}) {
  return (
    <div>
      <a href={path} alt={alt}>
        {image}
      </a>
    </div>
  );
}

export default Icons;
