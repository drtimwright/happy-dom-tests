/**
 * @vitest-environment jsdom
 */

describe("jsdom tests", () => {
    it("parses", () => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(svg, "image/svg+xml");
        const root = xmlDoc.getRootNode().childNodes[0];
        expect(root.nodeName).toEqual("svg")
    })
})

// this is taken from the output of a VIZ production to SVG.
const svg =
    '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="626pt" height="101pt" viewBox="0.00 0.00 625.97 101.00">\n' +
    '<g class="graph" id="graph0" transform="scale(1 1) rotate(0) translate(4 97)">\n' +
    '<polygon fill="white" stroke="transparent" points="-4,4 -4,-97 621.97,-97 621.97,4 -4,4"></polygon>\n' +
    '<g class="cluster unknown" id="Cluster">\n' +
    "<title>cluster Cluster</title>\n" +
    '<polygon fill="lightgrey" stroke="black" points="129.98,-8 129.98,-85 237.77,-85 237.77,-8 129.98,-8"></polygon>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="183.87" y="-68.4">Cluster Name</text>\n' +
    "</g>\n" +
    '<g class="cluster unknown" id="Generated">\n' +
    "<title>cluster Generated</title>\n" +
    '<polygon fill="lightgrey" stroke="black" points="257.77,-8 257.77,-85 493.35,-85 493.35,-8 257.77,-8"></polygon>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="375.56" y="-68.4">Generated</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="node color-override-4 not-selected" id="start">\n' +
    "<title>start</title>\n" +
    '<ellipse fill="lightgrey" stroke="black" cx="50.99" cy="-34" rx="50.98" ry="18"></ellipse>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="50.99" y="-29.8" fill="white">start name</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="node color-override-1 not-selected" id="node-1-1">\n' +
    "<title>node-1-1</title>\n" +
    '<ellipse fill="lightgrey" stroke="black" cx="183.87" cy="-34" rx="45.79" ry="18"></ellipse>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="183.87" y="-29.8" fill="white">node-1-1</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="edge unknown not-selected" id="node-1-1start">\n' +
    "<title>start-&gt;node-1-1</title>\n" +
    '<path fill="none" stroke="black" d="M102.22,-34C110.52,-34 119.17,-34 127.59,-34"></path>\n' +
    '<polygon fill="black" stroke="black" points="127.7,-37.5 137.7,-34 127.7,-30.5 127.7,-37.5"></polygon>\n' +
    "</g>\n" +
    "\n" +
    '<g class="node color-override-5 not-selected" id="end">\n' +
    "<title>end</title>\n" +
    '<ellipse fill="lightgrey" stroke="black" cx="569.66" cy="-34" rx="48.12" ry="18"></ellipse>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="569.66" y="-29.8" fill="white">end name</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="node color-override-2 not-selected" id="node-2-1">\n' +
    "<title>node-2-1</title>\n" +
    '<ellipse fill="lightgrey" stroke="black" cx="311.66" cy="-34" rx="45.79" ry="18"></ellipse>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="311.66" y="-29.8" fill="white">node-2-1</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="edge unknown not-selected" id="node-1-1-node-2-1-end">\n' +
    "<title>node-1-1-&gt;node-2-1</title>\n" +
    '<path fill="none" stroke="black" d="M229.93,-34C238.15,-34 246.81,-34 255.29,-34"></path>\n' +
    '<polygon fill="black" stroke="black" points="255.5,-37.5 265.5,-34 255.5,-30.5 255.5,-37.5"></polygon>\n' +
    "</g>\n" +
    "\n" +
    '<g class="node color-override-3 not-selected" id="node-3-1">\n' +
    "<title>node-3-1</title>\n" +
    '<ellipse fill="lightgrey" stroke="black" cx="439.45" cy="-34" rx="45.79" ry="18"></ellipse>\n' +
    '<text font-size="14.00" font-family="sans-serif" text-anchor="middle" x="439.45" y="-29.8" fill="white">node-3-1</text>\n' +
    "</g>\n" +
    "\n" +
    '<g class="edge unknown not-selected" id="node-3-1-node-2-1-end">\n' +
    "<title>node-2-1-&gt;node-3-1</title>\n" +
    '<path fill="none" stroke="black" d="M357.72,-34C365.94,-34 374.6,-34 383.08,-34"></path>\n' +
    '<polygon fill="black" stroke="black" points="383.29,-37.5 393.29,-34 383.29,-30.5 383.29,-37.5"></polygon>\n' +
    "</g>\n" +
    "\n" +
    '<g class="edge unknown not-selected" id="node-3-1end">\n' +
    "<title>node-3-1-&gt;end</title>\n" +
    '<path fill="none" stroke="black" d="M485.65,-34C493.85,-34 502.51,-34 511.01,-34"></path>\n' +
    '<polygon fill="black" stroke="black" points="511.26,-37.5 521.26,-34 511.26,-30.5 511.26,-37.5"></polygon>\n' +
    "</g>\n" +
    "</g>\n" +
    "</svg>";