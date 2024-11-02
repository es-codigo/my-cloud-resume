// Code generated by templ - DO NOT EDIT.

// templ: version: v0.2.793
package views

//lint:file-ignore SA4006 This context is only used if a nested component is present.

import "github.com/a-h/templ"
import templruntime "github.com/a-h/templ/runtime"

func Styles() templ.Component {
	return templruntime.GeneratedTemplate(func(templ_7745c5c3_Input templruntime.GeneratedComponentInput) (templ_7745c5c3_Err error) {
		templ_7745c5c3_W, ctx := templ_7745c5c3_Input.Writer, templ_7745c5c3_Input.Context
		if templ_7745c5c3_CtxErr := ctx.Err(); templ_7745c5c3_CtxErr != nil {
			return templ_7745c5c3_CtxErr
		}
		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templruntime.GetBuffer(templ_7745c5c3_W)
		if !templ_7745c5c3_IsBuffer {
			defer func() {
				templ_7745c5c3_BufErr := templruntime.ReleaseBuffer(templ_7745c5c3_Buffer)
				if templ_7745c5c3_Err == nil {
					templ_7745c5c3_Err = templ_7745c5c3_BufErr
				}
			}()
		}
		ctx = templ.InitializeContext(ctx)
		templ_7745c5c3_Var1 := templ.GetChildren(ctx)
		if templ_7745c5c3_Var1 == nil {
			templ_7745c5c3_Var1 = templ.NopComponent
		}
		ctx = templ.ClearChildren(ctx)
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("<style>\n        /* Base styles */\n        body {\n            font-family: Arial, sans-serif;\n            padding: 0;\n            background-color: #f3f4f6;\n            margin: 20px;\n            line-height: 1.6;        \n        }\n        .container {\n            display: flex;\n            flex-direction: column;\n            height: 100vh;\n            padding-top: 4rem;\n        }\n      /* Sidebar styles for horizontal tab bar */\n        .navbar {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            z-index: 100;\n            display: flex;\n            flex-direction: row;\n            background-color: #f3f4f6;\n            padding: 1rem;\n            justify-content: space-around; /* Distribute tabs evenly */\n            border-bottom: 1px solid #e5e7eb; /* Add a bottom border */\n            align-items: center;\n    \n        }\n\n        .nav-items {\n            display: flex;\n            flex-direction: row;\n            gap: 1rem;\n        }\n\n        .navbar-header {\n            display: flex;\n            align-items: center;\n        }\n        \n        .avatar {\n            width: 2rem;\n            height: 2rem;\n            background-color: #3b82f6;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            font-weight: bold;\n            margin-right: 0.5rem;\n        }\n        .nav-item {\n            display: flex;\n            align-items: center;\n            padding: 0.5rem;\n            color: #374151;\n            text-decoration: none;\n            border-radius: 0.375rem;\n        }\n        .nav-item:hover {\n            background-color: #f3f4f6;\n        }\n        .nav-item span {\n            margin-right: 0.5rem;\n        }\n        /* Main content styles */\n        .main-content {\n            flex: 1;\n            padding: 1rem;\n            // overflow-y: auto;\n        }\n        .header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 1.5rem;\n        }\n        .header-icons {\n            display: flex;\n            align-items: center;\n        }\n        .header-icons > * {\n            margin-left: 1rem;\n        }\n        .card {\n            background-color: white;\n            border-radius: 0.5rem;\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n            margin-bottom: 1rem;\n            padding: 1rem;\n        }\n        .card-header {\n            padding: 1rem;\n            border-bottom: 1px solid #e5e7eb;\n        }\n        .card-content {\n            padding: 1rem;\n        }\n\n        .list-item {\n            margin-bottom: 1rem;\n        }\n\n        .list-item-info {\n            display: flex;\n            justify-content: space-between;\n        }\n        .quick-access {\n            display: grid;\n            gap: 1rem;\n            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n        }\n        .quick-access-item {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            height: 6rem;\n            background-color: #f9fafb;\n            border: 1px solid #e5e7eb;\n            border-radius: 0.375rem;\n            cursor: pointer;\n        }\n        .quick-access-item:hover {\n            background-color: #f3f4f6;\n        }\n\n        .section {\n            margin-bottom: 20px;\n        }\n\n        .section-title {\n            font-weight: bold;\n            margin-bottom: 10px;\n        }\n        .skill-tags {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 0.5rem;\n            margin-top: 1rem;\n        }\n        .skill-tag {\n            background-color: #f3f4f6;\n            color: #374151;\n            padding: 0.25rem 0.5rem;\n            border-radius: 0.25rem;\n            font-size: 0.875rem;\n        }\n        .projects {\n            display: grid;\n            gap: 1rem;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        }\n        /* Responsive design */\n        @media (max-width: 768px) {\n            .navbar {\n                display: none;\n            }\n        }\n    </style>")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		return templ_7745c5c3_Err
	})
}

var _ = templruntime.GeneratedTemplate