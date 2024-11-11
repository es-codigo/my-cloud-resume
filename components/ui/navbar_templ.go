// Code generated by templ - DO NOT EDIT.

// templ: version: v0.2.793
package ui

//lint:file-ignore SA4006 This context is only used if a nested component is present.

import "github.com/a-h/templ"
import templruntime "github.com/a-h/templ/runtime"

// templ Navbar() {
// <nav class="navbar">
//
//	<div class="navbar-header">
//	    <a href="/">
//	    <img src="https://storage.googleapis.com/my-cloud-resume-images/white-logo-1.png" alt="William Young" class="logo"  />
//	    </a>
//	</div>
//	<nav class="nav-items">
//	    <a href="/about" class="nav-item">About</a>
//	    <a href="/#experience" class="nav-item">Experience</a>
//	    <a href="/#education" class="nav-item">Education</a>
//	    <a href="/#skills" class="nav-item">Skills</a>
//	    <a href="/#projects" class="nav-item">Projects</a>
//	    <a href="/contact" class="nav-item">Contact</a>
//	</nav>
//
// </nav>
// }
func Navbar() templ.Component {
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
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("<nav class=\"navbar\"><div class=\"navbar-content\"><div class=\"navbar-header\"><a href=\"/\"><img src=\"https://storage.googleapis.com/my-cloud-resume-images/white-logo-1.png\" alt=\"William Young\" class=\"logo\"></a></div><input type=\"checkbox\" id=\"hamburger-menu\" class=\"hamburger-menu\"> <label for=\"hamburger-menu\" class=\"hamburger-label\" aria-label=\"Toggle navigation\"><span></span> <span></span> <span></span></label><div class=\"nav-items\"><a href=\"/about\" class=\"nav-item\">About</a> <a href=\"/#experience\" class=\"nav-item\">Experience</a> <a href=\"/#education\" class=\"nav-item\">Education</a> <a href=\"/#skills\" class=\"nav-item\">Skills</a> <a href=\"/#projects\" class=\"nav-item\">Projects</a> <a href=\"/contact\" class=\"nav-item\">Contact</a></div></div></nav>")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		return templ_7745c5c3_Err
	})
}

var _ = templruntime.GeneratedTemplate
