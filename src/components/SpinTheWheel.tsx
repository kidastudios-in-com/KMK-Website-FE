import { Button, Modal, Text, Image, Link, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";

// interface SpinTheWheelProps {
//     open: boolean;
//   }

export function SpinTheWheel () {
  const [prize, setPrize] = useState(2);
  const [showPrize, setShowPrize] = useState(false);
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);

  function spin() {
    setAngle(0);
    const _prize = 2 + Math.floor(Math.random() * 3);
    const _angle = 3600 + 90 * prize;
    setPrize(_prize);
    setAngle(_angle);
    setTimeout(() => {
      setShowPrize(true);
    }, 2500);
  }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: 30,
        marginBottom: 210
      }}>
    <Card isHoverable style={{width: 650}} variant="flat">
      <Card.Body>
        <div style={{ position: "relative", width: "100%", height: 650 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "url('/spin-the-wheel-bg.svg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              opacity: showPrize ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Text
              css={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#fe9d28",
                textAlign: "center",
                marginTop: 32,
              }}
            >
              Spin To Win Guaranteed Reward
            </Text>
            <Text
              css={{
                color: "#fe9d28",
                fontSize: 20,
                paddingLeft: 32,
                paddingRight: 32,
                paddingBottom: 16,
                textAlign: "center",
              }}
            >
              Welcome to the KamayaKya fam! <br />
              This is a token of gratitude from our side.
            </Text>

            <div style={{ position: "relative" }}>
              <img
                src="/wheel.svg"
                style={{
                  width: 300,
                  height: 300,
                  transform: `rotate(${angle}deg)`,
                  transition: "transform 3s ease-in-out",
                }}
              ></img>
              <img
                src="/cursor.png"
                style={{
                  width: 86,
                  height: 120,
                  position: "absolute",
                  bottom: -32,
                  left: "50%",
                  marginLeft: -40,
                }}
              ></img>
            </div>
            <Button
              size="lg"
              color="warning"
              css={{ marginTop: 32 }}
              disabled={spinning}
              onPress={() => {
                setSpinning(true);
                spin();
              }}
            >
              Spin
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "url('/prize-bg.svg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              opacity: showPrize ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              pointerEvents: showPrize ? "unset" : "none",
            }}
          >
            <Image
              src="/Spin the Wheel Banner.png"
              width={200}
              height={200}
              objectFit="contain"
              style={{outline: '1px dashed pink'}}
            ></Image>
            <Text
              css={{
                fontSize: 48,
                fontWeight: "bold",
                textAlign: "center",
                color: "#4B4946",
              }}
            >
              Congratulations!
            </Text>
            <Text
              css={{
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "center",
                color: "#4B4946",
                paddingLeft: 64,
                paddingRight: 64,
              }}
            >
              You have Won {prize} month{prize > 1 && "s"} Subscription of
              KamayaKya Recommendations
            </Text>
            <div
              style={{
                backgroundColor: "#125B54",
                padding: 8,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 8,
                marginBottom: 32
              }}
            >
                <Link
                href={`https://kamayakya.com/register?`}
                style={{
                  display: "block",
                  color: "white",
                  fontSize: 28,
                  fontWeight: "bold",
                }}
              >
                Click here for your reward
              </Link>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}
