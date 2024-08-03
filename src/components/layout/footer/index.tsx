import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { styled } from '../../../../stitches.config'
import Box from 'components/common/box'
import Container from 'components/layout/container'
import Text from 'components/common/text'
import { ArrowUp } from 'components/primitives/arrow'
import Section from '../section'

const FooterAnimation = dynamic(() => import('./animation'), { ssr: false })

const FooterGrid = styled('footer', {
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'repeat(4, auto)',
  border: '1px solid $colors$white',

  '@bp2': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, auto)'
  },

  '.fallingLetters': {
    gridColumn: '1',
    gridRow: '1',
    height: '100%',
    minHeight: 176,

    '@bp2': {
      gridColumn: '1/3',
      height: '100%',
      minHeight: 254,
      borderRight: '1px solid $colors$white',
      borderBottom: '1px solid $colors$white'
    }
  },
  '.social': {
    gridColumn: '1',
    gridRow: '2',
    borderBottom: '1px solid $colors$white',
    borderTop: '1px solid $colors$white',
    height: '100%',
    minHeight: 176,

    '@bp2': {
      height: '100%',
      minHeight: 254,
      gridColumn: '3/5',
      gridRow: '1',
      borderTop: '0'
    }
  },
  '.policies': {
    height: 36,
    gridRow: '3',
    gridColumn: '1/3',

    '@bp2': {
      gridColumn: '1/3',
      gridRow: '2',
      height: 46,
      borderRight: '1px solid $colors$white'
    }
  },
  '.legal': {
    gridColumn: '1',
    gridRow: '4',
    height: 36,
    borderTop: '1px solid $colors$white',

    '@bp2': {
      gridColumn: '3/5',
      gridRow: '2',
      height: 46,
      borderTop: 'none'
    }
  },
  length: 0
})

const Social = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-3px -6px',
  justifyContent: 'space-between',

  '@bp2': {
    margin: '0',
    flexWrap: 'nowrap'
  },

  li: {
    padding: '3px 6px',

    '@bp2': {
      padding: '0'
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%'
    },

    'p.label': {
      background:
        'linear-gradient(to right, transparent, transparent), linear-gradient(to right, $colors$white, $colors$white)',
      backgroundSize: '100% 0.1em, 0 0.1em',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 250ms',
      marginRight: '$2'
    },

    '&:hover': {
      'p.label': {
        backgroundSize: '0 0.1em, 100% 0.1em'
      },
      '.arrow': {
        svg: {
          fill: '$colors$white'
        }
      }
    }
  },
  length: 0
})

const FooterLink = styled('a', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    transition: 'background 200ms ease-in',
    background: '$white',

    '.label': {
      color: '$black'
    }
  },
  length: 0
})

const social = [
  {
    label: 'telegram',
    href: 'https://t.me/osmonlang'
  },
  {
    label: 'github',
    href: 'https://github.com/osmon-lang/osmon'
  }
]

const Footer = () => {
  const { inView, ref } = useInView({ triggerOnce: true })

  return (
    <Section
      css={{
        paddingBottom: 40,
        paddingTop: 48
      }}
      // @ts-ignore
      background="black"
      data-scroll-section
      noMargin
    >
      {/* @ts-ignore */}
      <Container maxWidth>
        <FooterGrid>
          <Box
            css={{ position: 'relative', overflow: 'hidden' }}
            className="fallingLetters"
            ref={ref}
          >
            {inView && <FooterAnimation />}
          </Box>

          <Box
            className="social"
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 20
            }}
          >
            <Box>
              <Text
                css={{
                  fontSize: 'min(60px, 5.4vw)',
                  lineHeight: 1,
                  '@bp2': { fontSize: 'min(60px, 2.8vw)' }
                }}
                // @ts-ignore
                heading
                tight
              >
                dasturlash insoniyatni{' ' /* @ts-ignore */}
                <Text
                  css={{ lineHeight: 1.5, display: 'block' }}
                  as="span"
                  heading
                  outlined
                >
                  komillikga yetaklaydi.
                </Text>
              </Text>
            </Box>
            <Social css={{ marginTop: '$4' }}>
              {social.map(({ label, href }, idx) => (
                <li key={idx}>
                  <a href={href} target="_blank" rel="noopener">
                    <Text
                      className="label"
                      css={{
                        fontSize: '$3',
                        '@bp2': { fontSize: 'min(24px, 1.3vw)' }
                      }}
                      // @ts-ignore
                      heading
                    >
                      {label}
                    </Text>

                    <Box
                      css={{
                        width: 10,
                        height: 10,
                        '@bp2': { width: 19, height: 19 }
                      }}
                      className="arrow"
                    >
                      <ArrowUp
                        css={{
                          $$size: '$3',
                          '@bp2': { $$size: 'min(20px, 1.3vw)' }
                        }}
                      />
                    </Box>
                  </a>
                </li>
              ))}
            </Social>
          </Box>
          <Box
            className="policies"
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '$1',
              '@bp2': { fontSize: '$3' }
            }}
          >
            <FooterLink
              href="https://t.me/osmonchat"
              target="_blank"
              rel="noopener"
              css={{
                borderRight: '1px solid $colors$white'
              }}
            >
              {/* @ts-ignore */}
              <Text className="label" as="span" heading>
                jamiyat
              </Text>
            </FooterLink>
            <FooterLink
              href="https://wiki.osmon-lang.uz/"
              target="_blank"
              rel="noopener"
              css={{
                borderRight: '1px solid $colors$white'
              }}
            >
              {/* @ts-ignore */}
              <Text className="label" as="span" heading>
                wiki
              </Text>
            </FooterLink>
            <FooterLink
              target="_blank"
              rel="noopener"
              href="mailto:sakhib@orzklv.uz"
            >
              {/* @ts-ignore */}
              <Text className="label" as="span" heading>
                bog'lanish
              </Text>
            </FooterLink>
          </Box>
          <Box
            className="legal"
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text css={{ fontSize: '$1', '@bp2': { fontSize: '$3' } }}>
              Apache & MIT © Osmon 2022-{new Date().getFullYear()}
            </Text>
          </Box>
        </FooterGrid>
      </Container>
    </Section>
  )
}

export default Footer
