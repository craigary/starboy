import Social from '@/components/ui/Social'

const Hero = () => {
  return (
    <div className="pt-8">
      <h2 className="font-bold text-4xl mb-5 ">Craig Hart</h2>
      <p className="font-bold  ">Front-end developer at Gatsby. Based in Brooklyn, NY</p>
      <div className="my-6">
        <Social />
      </div>
    </div>
  )
}

export default Hero
