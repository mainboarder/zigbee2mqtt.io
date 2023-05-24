"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43283],{305795:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-69662fe8","path":"/devices/ERS-10TZBVK-AA.html","title":"TuYa ERS-10TZBVK-AA control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ERS-10TZBVK-AA control via MQTT","description":"Integrate your TuYa ERS-10TZBVK-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"The toggle action switches on/off an unexpected zigbee device","slug":"the-toggle-action-switches-on-off-an-unexpected-zigbee-device","link":"#the-toggle-action-switches-on-off-an-unexpected-zigbee-device","children":[]},{"level":3,"title":"Device operation","slug":"device-operation","link":"#device-operation","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action_step_size (numeric)","slug":"action-step-size-numeric","link":"#action-step-size-numeric","children":[]},{"level":3,"title":"Action_transition_time (numeric)","slug":"action-transition-time-numeric","link":"#action-transition-time-numeric","children":[]},{"level":3,"title":"Action_rate (numeric)","slug":"action-rate-numeric","link":"#action-rate-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Operation_mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1684945237000},"filePathRelative":"devices/ERS-10TZBVK-AA.md"}')},305993:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var i=o(166252);const n=(0,i._)("h1",{id:"tuya-ers-10tzbvk-aa",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-ers-10tzbvk-aa","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa ERS-10TZBVK-AA")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ERS-10TZBVK-AA")],-1),r=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart knob")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, action_step_size, action_transition_time, action_rate, battery, operation_mode, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVK-AA.jpg",alt:"TuYa ERS-10TZBVK-AA"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair, press the reset button on the back until the green LED flashes.</p><blockquote><p>Note: When you release the reset button, the green LED should keep flashing until the device is paired. If it only flashes a few times and then stops, your battery level is most likely too low (&lt;3v) and you need to replace the battery.</p></blockquote><h3 id="the-toggle-action-switches-on-off-an-unexpected-zigbee-device" tabindex="-1"><a class="header-anchor" href="#the-toggle-action-switches-on-off-an-unexpected-zigbee-device" aria-hidden="true">#</a> The <code>toggle</code> action switches on/off an unexpected zigbee device</h3>',5),h={href:"https://github.com/Koenkk/zigbee2mqtt/issues/12397",target:"_blank",rel:"noopener noreferrer"},p=(0,i.uE)('<h3 id="device-operation" tabindex="-1"><a class="header-anchor" href="#device-operation" aria-hidden="true">#</a> Device operation</h3><p>Device can be set in two modes : COMMAND and EVENT (Current Mode is published on the operation_mode property). A triple click seems firmware dependend (no action shown) and will toggle between COMMAND and EVENT mode.</p><ul><li><code>COMMAND</code> mode</li></ul><table><thead><tr><th>User Action</th><th><code>action</code> property</th></tr></thead><tbody><tr><td>Rotate Left</td><td>Brightness_Step_Up</td></tr><tr><td>Rotate Right</td><td>Brightness_Step_Down</td></tr><tr><td>Single Click</td><td>Toggle</td></tr><tr><td>HOLD more than 3s</td><td>Hue_Move</td></tr><tr><td>UnHold button</td><td>Hue_Stop</td></tr><tr><td>Push+Hold and Rotate Left</td><td>color_temperature_step_up</td></tr><tr><td>Push+Hold and Rotate Left</td><td>color_temperature_step_down</td></tr></tbody></table><p>Action_Step_Size = %Numeric_Value (0_255) Action_Rate = Keeps &quot;No value&quot; all the time</p><ul><li><code>EVENT</code> mode</li></ul><table><thead><tr><th>User Action</th><th><code>action</code> property</th></tr></thead><tbody><tr><td>Rotate Left</td><td>rotate_left</td></tr><tr><td>Rotate Left</td><td>rotate_right</td></tr><tr><td>Single Click</td><td>single</td></tr><tr><td>Double Click</td><td>double</td></tr><tr><td>Hold</td><td>hold</td></tr></tbody></table><p>action_step_size, action_transition_time, action_rate are still present but show &quot;no value&quot;</p>',8),m=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),b=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>saturation_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>single</code>, <code>double</code>, <code>hold</code>, <code>rotate_left</code>, <code>rotate_right</code>.</p><h3 id="action-step-size-numeric" tabindex="-1"><a class="header-anchor" href="#action-step-size-numeric" aria-hidden="true">#</a> Action_step_size (numeric)</h3><p>Value can be found in the published state on the <code>action_step_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="action-transition-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-transition-time-numeric" aria-hidden="true">#</a> Action_transition_time (numeric)</h3><p>Value can be found in the published state on the <code>action_transition_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="action-rate-numeric" tabindex="-1"><a class="header-anchor" href="#action-rate-numeric" aria-hidden="true">#</a> Action_rate (numeric)</h3><p>Value can be found in the published state on the <code>action_rate</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Operation mode: &quot;command&quot; - for group control, &quot;event&quot; - for clicks. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),g={},_=(0,o(983744).Z)(g,[["render",function(e,t){const o=(0,i.up)("RouterLink"),g=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[a,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),s,l,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i._)("p",null,[(0,i.Uk)("The source of the problem is that manufactures of the knob and another device placed them into group 0 by default. To bypass it, you should manually create a group in Z2M with different ID (ID=1, for example) and add your knob inside. For more details take a look at "),(0,i._)("a",h,[(0,i.Uk)("the issue"),(0,i.Wm)(g)]),(0,i.Uk)(".")]),p,(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);