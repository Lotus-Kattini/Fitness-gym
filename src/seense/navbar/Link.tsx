import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string,
}

const Link = (
    {
        page,
        selectedpage,
    }: Props) => {

    const lowercasePage =page.toLowerCase().replace(/ /g,'') 
  return (
    <AnchorLink
        href={`#${lowercasePage}`}
        className={`${selectedpage === lowercasePage ? 'text-primary-500':''} transition duration-500 hover:text-primary-300`}
    >

    </AnchorLink>
  )
}

export default Link