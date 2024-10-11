const routesWithSlug = ({params}) => {
  console.log("slug",params);
  return (
    <div>{params?.slug}</div>
  )
}

export default routesWithSlug