import React from "react"

export function AppFooter()
{  
  const startTime = React.useRef(new Date());
  const [timeSeconds, setTimeSeconds] = React.useState<number>(0);

  React.useEffect(
    () => {
      const computeTimeDiff = () => {
        const timeDiffMs = new Date().getTime() - startTime.current.getTime();
        const timeDiffSeconds = Math.floor(timeDiffMs / 1000);
        setTimeSeconds(timeDiffSeconds);
      };

      const timer = window.setInterval(
        computeTimeDiff,
        1000
      );

      return () => window.clearInterval(timer);
    }, []
  )

  return (
    <footer>
      <div className='container'>
        <h5>Spin time: {timeSeconds}s</h5>
      </div>
    </footer>
  )
}