---
authors: {% for x in creators %}{% if x.name %}{{x.name}}{% endif %}{% if x.firstName %}{{x.firstName}} {% endif %}{% if x.lastName %}{{x.lastName}}{% endif %}{% if not loop.last %}, {% endif %}{% endfor %}
publisher: {{publisher}}
---
#ztbib {% for x in tags %}{{x.tag}}{% if not loop.last %} {% endif %}{% endfor %}
## reference
{{bibliography}}
{% if abstractNote %}
## abstract
{{abstractNote}}
{% endif %}{% if annotations.length > 0 %}
## annotations
{% for annotation in annotations %}
{% if annotation.annotatedText %}> {{annotation.annotatedText}}{% endif %}
{% if annotation.comment %}> {{annotation.comment}}{% endif %}
{% endfor %}{% endif %}{% if notes.length > 0 %}
## notes
{{markdownNotes}}
{% endif %}## other
{% persist "persist" %}
{% endpersist %}