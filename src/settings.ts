/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";



import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

import ToggleSwitch = formattingSettings.ToggleSwitch;
import NumUpDown = formattingSettings.NumUpDown;
import TextInput = formattingSettings.TextInput;
import Slice = formattingSettings.Slice;
import ColorPicker = formattingSettings.ColorPicker;
import AutoDropdown = formattingSettings.AutoDropdown;
import FontControl = formattingSettings.FontControl;
import FontPicker = formattingSettings.FontPicker;
import TextArea = formattingSettings.TextArea;

/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor = new formattingSettings.ColorPicker({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    });

    showAllDataPoints = new formattingSettings.ToggleSwitch({
        name: "showAllDataPoints",
        displayName: "Show all",
        value: true
    });

    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });

    fillRule = new formattingSettings.ColorPicker({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });

    tileLayerUrl = new formattingSettings.TextInput({
        name: "Tile Layer URL",
        displayName: "Tile Layer URL",
        value: '',
        visible: true,
        placeholder:'add url'
    });

    tileLayerAttribution = new formattingSettings.TextInput({
        name: "tileLayerAttribution",
        displayName: "Layer Attribution",
        value: '',
        visible: true,
        placeholder:'Layer attribution'
    });

    name: string = "dataPoint";
    displayName: string = "Data colors";
    slices: Array<FormattingSettingsSlice> = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize, this.tileLayerUrl, this.tileLayerAttribution];
}


class DirectEditSettings extends FormattingSettingsCard {


    displayName: string = "Direct Edit";
    name: string = "directEdit";
    private minFontSize: number = 8;
    private defaultFontSize: number = 11;
    show = new ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: true,
    });

    topLevelSlice: ToggleSwitch = this.show;
    textProperty = new TextInput({
        displayName: "Text Property",
        name: "textProperty",
        value: "What is your quest?",
        placeholder: ""
    });

    position = new AutoDropdown({
        name: "position",
        displayName: "Position",
        value: "Right"
    });

    font = new FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Segoe UI, wf_segoe-ui_normal, helvetica, arial, sans-serif"
        }),
        fontSize: new NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: this.defaultFontSize,
            options: {
                minValue: {
                    type: powerbi.visuals.ValidatorType.Min,
                    value: this.minFontSize,
                }
            }
        }),
        bold: new ToggleSwitch({
            name: "bold",
            displayName: "bold",
            value: true
        }),
        italic: new ToggleSwitch({
            name: "italic",
            displayName: "italic",
            value: true
        }),
        underline: new ToggleSwitch({
            name: "underline",
            displayName: "underline",
            value: true
        })
    });

    fontColor = new ColorPicker({
        name: "fontColor",
        displayName: "Color",
        value: { value: "#000000" }
    });
    background = new ColorPicker({
        name: "background",
        displayName: "Background Color",
        value: { value: "#FFFFFF" }
    });
   
    tileLayer = new TextArea({
        name: "tileLayer",
        displayName: "tileLayer",
        placeholder:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OSM', minZoom: 1, maxZoom: 20}",
        value:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OSM', minZoom: 1, maxZoom: 20}"
    });

    zoomLevel = new NumUpDown({
        name: "zoomLevel",
        displayName: "Zoom Level",
        value: 2
    })

    slices: Slice[] = [this.textProperty, this.font, this.fontColor, this.background, this.position, this.tileLayer, this.zoomLevel];

}



/**
* visual settings model class
*
*/


export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    directEditSettings = new DirectEditSettings();
    cards = [this.dataPointCard, this.directEditSettings];
}
