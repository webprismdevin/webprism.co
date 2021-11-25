import Content from "@/components/content";

export interface MissionProps {
  name?: string
}

const Mission = (props: MissionProps) => {
    return(<>
      <Content fullheight title="We see you.">
          <p className="block one_k_wide is-size-5">You have a vision fueled by a great passion near and dear to you. You&apos;ve taken that creative spark and translated it into a business. Now you&apos;re on a mission to share your creativity with the world.</p>
          <p className="block one_k_wide is-size-5">Whether it be a hobby turned side-hustle, a thriving business ready to grow, or a burning desire to share your talents far and wide, we can help you realize your vision and take it to the next level.</p>
          <p className="block one_k_wide is-size-5">We see you. We feel your passion.</p>
          <p className="block one_k_wide is-size-4">Let&apos;s build something beautiful together.</p>
      </Content>
    </>)
}

export default Mission;