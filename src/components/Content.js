import React from "react";
import { Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";
import "../style/content.css";

export const Content = () => {
    const textContent = [
        "Net Zero in the UK is ‘targeted’ to stop the use of Coal, Gas, Oil, Diesel and Petrol by 2050 (28 years). If a total stop is not possible, then Co2 absorption will be relied upon for the balance to Net Zero, via either natural (trees and nature) or man made methods (Carbon Capture etc).",
        "In 2022 in the UK, just 8% of daily energy consumption is from clean sources such as Wind, Solar, Hydro and now Nuclear which has been ‘re-branded’ as ‘clean’ The other 92% of daily energy usage is shown below as 9.5% ‘dirty’ electricity from Fossil Fuels, 50.3% Gas, 7.6% Petrol, 15.5% Diesel and 9.2% Industrial and Aviation fuels.",
        "That alternative ‘clean’ sources of energy would need to be found for 92% of the UK’s daily energy needs, which would require 100+ NEW Nuclear Power-stations, which no-one is planning, which means……………..",
    ];

    const words = [
        "However...",
        "Which means...",
        "Net Zero in the UK is IMPOSSIBLE",
    ];

    return (
        <div>
            <Box
                css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}
                class="container"
                style={{ marginTop: "10rem" }}
            >
                <Text h2>Lorem ipsum dolor sit amet</Text>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridTemplateRows: "1fr 1fr 1fr",
                    }}
                >
                    {textContent.map((text, index) => (
                        <div
                            key={index}
                            className="column"
                            style={{
                                gridRow: index + 1,
                                gridColumn: index + 1,
                            }}
                        >
                            <Text size="$lg">{text}</Text>
                            <Spacer y={1} />
                            <Text size="$lg" className="right-col">
                                {words[index]}
                            </Text>
                        </div>
                    ))}
                </div>
            </Box>
        </div>
    );
};
// export const Content = () => (
//     <div>
//         <Box
//             css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}
//             class="container"
//             style={{ marginTop: "10rem" }}
//         >
//             <Text h2>Lorem ipsum dolor sit amet</Text>
//             <div class="container">
//                 <div class="column">
//                     <Text size="$lg">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor incididunt ut labore et dolore
//                         magna aliqua. Purus gravida quis blandit turpis. Augue
//                         neque gravida in fermentum et sollicitudin ac orci. Et
//                         sollicitudin ac orci phasellus egestas. Elementum tempus
//                         egestas sed sed risus pretium quam vulputate. Interdum
//                         velit euismod in pellentesque massa placerat duis
//                         ultricies.
//                     </Text>
//                     <Spacer y={1} />
//                     <div class="right-col">However</div>
//                 </div>

//                 <div class="column">
//                     <Text size="$lg" class="column">
//                         Rhoncus mattis rhoncus urna neque viverra justo nec
//                         ultrices dui. Praesent semper feugiat nibh sed pulvinar.
//                         Ultrices gravida dictum fusce ut placerat orci nulla
//                         pellentesque. Malesuada proin libero nunc consequat
//                         interdum varius sit amet. Lectus quam id leo in vitae.
//                         Sed viverra tellus in hac habitasse platea dictumst.
//                         Vivamus at augue eget arcu. Augue mauris augue neque
//                         gravida in.
//                     </Text>
//                     <Spacer y={1} />
//                 </div>
//                 <div class="column">
//                     <Text size="$lg" class="column">
//                         Tincidunt vitae semper quis lectus nulla at volutpat
//                         diam. Gravida dictum fusce ut placerat. Erat velit
//                         scelerisque in dictum non. Tempus quam pellentesque nec
//                         nam aliquam sem et tortor consequat. Eu nisl nunc mi
//                         ipsum faucibus. Cras fermentum odio eu feugiat pretium
//                         nibh. Vel pharetra vel turpis nunc eget lorem dolor sed
//                         viverra. Sollicitudin tempor id eu nisl nunc mi ipsum
//                         faucibus. Sed id semper risus in hendrerit gravida
//                         rutrum. Eget nulla facilisi etiam dignissim. Erat
//                         imperdiet sed euismod nisi. Risus in hendrerit gravida
//                         rutrum quisque non tellus orci ac.
//                     </Text>
//                     <Spacer y={1} />
//                 </div>
//                 {/* <Text size="$lg">
//                     Tempor orci dapibus ultrices in iaculis nunc sed augue
//                     lacus. In pellentesque massa placerat duis ultricies. Sit
//                     amet massa vitae tortor condimentum. Morbi tincidunt augue
//                     interdum velit euismod. Aliquet enim tortor at auctor urna
//                     nunc id. A scelerisque purus semper eget. Vitae justo eget
//                     magna fermentum iaculis. Arcu non odio euismod lacinia at
//                     quis. Et leo duis ut diam quam nulla porttitor massa. Eget
//                     nunc scelerisque viverra mauris. Suscipit tellus mauris a
//                     diam maecenas sed enim. Cras sed felis eget velit aliquet.
//                     Est placerat in egestas erat imperdiet sed euismod nisi
//                     porta. In ante metus dictum at tempor commodo. In cursus
//                     turpis massa tincidunt dui ut ornare lectus. Tempus iaculis
//                     urna id volutpat. Iaculis eu non diam phasellus vestibulum
//                     lorem sed risus.
//                 </Text>
//                 <Spacer y={1} />
//                 <Text size="$lg">
//                     Ridiculus mus mauris vitae ultricies leo integer malesuada
//                     nunc vel. Imperdiet massa tincidunt nunc pulvinar sapien et
//                     ligula ullamcorper malesuada. Faucibus pulvinar elementum
//                     integer enim neque volutpat. Gravida arcu ac tortor
//                     dignissim convallis aenean. Lectus quam id leo in vitae.
//                     Ultricies tristique nulla aliquet enim tortor. Nec tincidunt
//                     praesent semper feugiat nibh sed. Imperdiet proin fermentum
//                     leo vel orci porta non pulvinar neque. Praesent semper
//                     feugiat nibh sed pulvinar proin gravida. Dis parturient
//                     montes nascetur ridiculus mus mauris. Rhoncus dolor purus
//                     non enim praesent elementum facilisis leo vel. Ut lectus
//                     arcu bibendum at. Integer enim neque volutpat ac. Diam sit
//                     amet nisl suscipit. Eros donec ac odio tempor orci dapibus
//                     ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu
//                     non odio euismod. Quis lectus nulla at volutpat diam ut.
//                     Turpis egestas integer eget aliquet. Adipiscing tristique
//                     risus nec feugiat in fermentum posuere. Morbi tempus iaculis
//                     urna id. Amet commodo nulla facilisi nullam vehicula ipsum a
//                     arcu.
//                 </Text>
//                 <Text size="$lg">
//                     Rhoncus mattis rhoncus urna neque viverra justo nec ultrices
//                     dui. Praesent semper feugiat nibh sed pulvinar. Ultrices
//                     gravida dictum fusce ut placerat orci nulla pellentesque.
//                     Malesuada proin libero nunc consequat interdum varius sit
//                     amet. Lectus quam id leo in vitae. Sed viverra tellus in hac
//                     habitasse platea dictumst. Vivamus at augue eget arcu. Augue
//                     mauris augue neque gravida in.
//                 </Text>
//                 <Spacer y={1} />
//                 <Text size="$lg">
//                     Tincidunt vitae semper quis lectus nulla at volutpat diam.
//                     Gravida dictum fusce ut placerat. Erat velit scelerisque in
//                     dictum non. Tempus quam pellentesque nec nam aliquam sem et
//                     tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras
//                     fermentum odio eu feugiat pretium nibh. Vel pharetra vel
//                     turpis nunc eget lorem dolor sed viverra. Sollicitudin
//                     tempor id eu nisl nunc mi ipsum faucibus. Sed id semper
//                     risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
//                     dignissim. Erat imperdiet sed euismod nisi. Risus in
//                     hendrerit gravida rutrum quisque non tellus orci ac.
//                 </Text>
//                 <Spacer y={1} /> */}
//             </div>
//         </Box>
//     </div>
// );
