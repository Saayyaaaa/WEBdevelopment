from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name=validated_data.get("name"),
            description=validated_data.get("description"),
            address=validated_data.get("address"),
            city=validated_data.get("city")
        )

        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance

class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ("id", "name", "description", "city", "address")