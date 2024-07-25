import { useEffect, useState } from "react";

function useTimer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds >= 59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return { seconds, minutes };
}

export default useTimer;
