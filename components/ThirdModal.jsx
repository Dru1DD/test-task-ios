import React, { useState, useRef, useCallback } from "react";
import { View, PanResponder } from 'react-native'
import { mainPage as styles } from '../styles/mainPage'
import Svg, { Path, Circle, G, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

const ThirdModel = ({
	btnRadius = 20,
	dialRadius = 130,
	dialWidth = 15,
	meterColor = "#0cd",
	fillColor = "none",
	strokeColor = "#fff",
	strokeWidth = 10,
	value = 0,
	min = 0,
	max = 359,
	xCenter = 250 / 2,
	yCenter = 250 / 2,
}) => {
	const [angle, setAngle] = useState(value);

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: (e, gs) => true,
			onStartShouldSetPanResponderCapture: (e, gs) => true,
			onMoveShouldSetPanResponder: (e, gs) => true,
			onMoveShouldSetPanResponderCapture: (e, gs) => true,
			onPanResponderMove: (e, gs) => {
				let xOrigin = xCenter - (dialRadius + btnRadius);
				let yOrigin = yCenter - (dialRadius + btnRadius);
				let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

				if (a <= min) {
					setAngle(min);
				} else if (a >= max) {
					setAngle(max);
				} else {
					setAngle(a);
				}
			},
		})
	).current;

	const polarToCartesian = useCallback(
		(angle) => {
			let r = dialRadius;
			let hC = dialRadius + btnRadius;
			let a = ((angle - 90) * Math.PI) / 180.0;

			let x = hC + r * Math.cos(a);
			let y = hC + r * Math.sin(a);
			return { x, y };
		},
		[dialRadius, btnRadius]
	);

	const cartesianToPolar = useCallback(
		(x, y) => {
			let hC = dialRadius + btnRadius;

			if (x === 0) {
				return y > hC ? 0 : 180;
			} else if (y === 0) {
				return x > hC ? 90 : 270;
			} else {
				return (
					Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
					(x > hC ? 90 : 270)
				);
			}
		},
		[dialRadius, btnRadius]
	);
    

	const width = (dialRadius + btnRadius) * 2;
	const bR = btnRadius;
	const dR = dialRadius;
	const startCoord = polarToCartesian(0);
	let endCoord = polarToCartesian(angle);

	return (
        <View style={[styles.modalContainer, { width: 320, height: 350, backgroundColor: 'rgba(225, 225, 225, 1)'}]}>
            <Svg width={width} height={width}>
            <Circle
				r={dR}
				cx={width / 2}
				cy={width / 2}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				fill={fillColor}
		    >
                
            </Circle> 
            <SvgText
                fontSize={48}
                x={width / 3}
                y={width / 1.75}
                fill="black"
            >{`${Math.floor(angle / 4.5)} °C`}</SvgText>
			            
            <LinearGradient id="path" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#FFFAC5" stopOpacity="1" />
              <Stop offset="1" stopColor="#B7AA1A" stopOpacity="1" />
            </LinearGradient>
			<Path
				stroke="url(#path)"
				strokeWidth={dialWidth}
				fill="none"
				d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
					angle > 180 ? 1 : 0
				} 1 ${endCoord.x} ${endCoord.y}`}
			/>
			<G x={endCoord.x - bR} y={endCoord.y - bR}>
				<Circle
					r={bR}
					cx={bR}
					cy={bR}
					fill="white"
					{...panResponder.panHandlers}
				/>
			</G>
		</Svg>
        </View>
		
	);
};

export default React.memo(ThirdModel);