import NextLink from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: scale(1.1);
    }
`

const Logo = () => {
    return(
        <NextLink href="/" aria-label="Home">
                <LogoBox>
                    <Image 
                        src="/ok_logo_transparent.png" 
                        width={35} 
                        height={35} 
                        alt="Omar Khan personal logo"
                        priority
                    />
                </LogoBox>
        </NextLink>
    )
}

export default Logo